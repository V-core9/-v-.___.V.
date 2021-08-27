#!/bin/bash
 
# Declare a string array with type
declare -a StringArray=("users" "versions" "uuid" "graphics" "battery" "processes" "services" "disk_layout" "fs_stats" "disk_io" "open_files" "audio" "net_stats" "net_conn" "net_def_gateway" "net_def_interface" "net_interfaces" )
 
# Read the array values with space
for val in "${StringArray[@]}"; do
  bash -c "oclif command 'sys_'$val"
done
