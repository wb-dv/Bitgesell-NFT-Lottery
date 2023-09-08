import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getNFTsInfo } from '@api';

import { useValidAddress } from '@hooks/useValidAddress';

import { separateNFTsByLevel } from '@helpers/separateNFTsByLevel';

import { placeholderTokensInfo } from './testTokensData';

import { Search } from '@UI/Search/Search';
import { TokensList } from '@UI/TokensList/TokensList';
import { TotalPts } from '@UI/TotalPts/TotalPts';
import { Spinner } from '@UI/Spinner/Spinner';
import { GradeInfo } from '@UI/GradeInfo/GradeInfo';

import styles from './TokensPanel.module.scss';

export function TokensPanel() {
  const queryClient = useQueryClient();

  const {
    mutate: getNFTs,
    data: realInfo,
    isLoading,
    isSuccess,
    reset: resetSearchNfts,
  } = useMutation({
    mutationFn: getNFTsInfo,
    mutationKey: ['nfts-info'],
    onSuccess: (data) => {
      data.nfts = separateNFTsByLevel(data.nfts);
      queryClient.setQueryData(['nfts-info'], data);
    },
  });

  const data = isSuccess ? realInfo : placeholderTokensInfo;

  const validAddress = useValidAddress();

  return (
    <div className={styles.TokensPanel__brilliants}>
      <div className={styles.TokensPanel}>
        <div className={styles.TokensPanel__flex}>
          <Search
            customWrapperClasses={styles.TokensPanel__search}
            label="Search NFT for address"
            searchFn={getNFTs}
            validFn={validAddress}
            onClear={resetSearchNfts}
          />
          {data.nfts.map((nftByLevel) => (
            <TokensList
              tokens={nftByLevel}
              level={nftByLevel[0].level}
              countPts={data.pts_by_grade[nftByLevel[0].level] ?? 0}
              key={nftByLevel[0].level}
            />
          ))}
          <GradeInfo
            customWrapperClasses={styles.TokensPanel__gradeInfo}
            nfts={data.nfts}
          />
        </div>
        <TotalPts pts={isLoading ? '?' : isSuccess ? data.sum_pts : 0} />
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}
