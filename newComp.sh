#!/bin/bash
echo 'level?'
select level in UI compound
do
  break
done
echo 'name of component?'
read component_name


jsx="import styles from './$component_name.module.scss';"$'\r\n'$'\r\n'"export function $component_name() {"$'\r\n'"  return <div className={styles.$component_name}></div>;"$'\r\n'"
}"

scss=".$component_name {}"

cd ./src/components/$level
mkdir $component_name
cd ./$component_name
echo $jsx > "$component_name.jsx"
echo $scss > "$component_name.module.scss"