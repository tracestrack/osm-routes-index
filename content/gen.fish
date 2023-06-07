#!/usr/bin/env fish

for i in (ls ../static/ferry_routes)
    set cc (echo $i|sed 's/.json//g')
    mkdir -p $cc/ferry
    cat all.md |sed "s/CN/$cc/g" > $cc/ferry/all.md
end
