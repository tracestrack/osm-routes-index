#!/usr/bin/env fish

for i in (ls *.toml)
    set a (echo $i|sed 's/.json//g')
    echo $a
    mv $i $a
end
