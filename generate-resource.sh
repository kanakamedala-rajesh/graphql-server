#!/usr/bin/env bash
# read -p "Enter new resource name: " resourceName
# read -p "Creating resource $resourceName Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

# yarn nest g resource $resourceName

# echo "Succesfully created new $resourceName resource"
read -p "How many resources would you like to create: " resourceCount

for ((i=1; i<=$resourceCount; i++))
do
    read -p "Enter new resource name: " resourceName
    read -p "Creating resource $resourceName Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

    yarn nest g resource $resourceName

    echo "Succesfully created new $resourceName resource"
done

echo ${my_array[@]}