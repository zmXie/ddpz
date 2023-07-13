# node update_version.js && npm publish && cd .. && npm run push

if node update_version.js; then
    if npm publish; then
        echo '发布成功'
        cd ..
        npm run push
    fi
fi
