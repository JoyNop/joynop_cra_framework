#!/bin/sh

read old_config < config_env.json

echo "string length" ${#old_config}

if [ "$old_config" ]; then
	echo "DELETE AFTER THREE SECONDS."
	sleep 3
	rm -rf config_env.json
	echo "DELETE SUCCESS!"
else
	echo "CREATE NEW CONFIGURATION NOW." 
fi

touch config_env.json
echo COLLECTING ENVIRONMENTAL INFORMATION



#echo $REACT_APP_NOT_SECRET_CODE
 
config_env='{
		"errno":0,
        "code":1,
        "apiUrl":'$REACT_APP_NOT_SECRET_CODE'
		}'
echo $config_env
echo $config_env >>config_env.json




 
