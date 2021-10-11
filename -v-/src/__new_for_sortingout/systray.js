const SysTray = require('systray');
 
let systray = new SysTray.default({
    menu: {
        // you should using .png icon in macOS/Linux, but .ico format in windows
        icon: "<base64 image string>",
        title: "标题",
        tooltip: "Tips",
        items: [{
            title: "CHECKBOX [click > toggle()]",
            tooltip: "bb",
            // checked is implement by plain text in linux
            checked: true,
            enabled: true
        }, {
            title: "BUTTON [click > console.log()]",
            tooltip: "bb",
            checked: false,
            enabled: true
        }, {
            title: "Exit",
            tooltip: "bb",
            checked: false,
            enabled: true
        }]
    },
    debug: false,
    copyDir: true, // copy go tray binary to outside directory, useful for packing tool like pkg.
})
 
systray.onClick(action => {
    if (action.seq_id === 0) {
        systray.sendAction({
            type: 'update-item',
            item: {
            ...action.item,
            checked: !action.item.checked,
            },
            seq_id: action.seq_id,
        })
    } else if (action.seq_id === 1) {
        // open the url
        console.log('open the url', action)
    } else if (action.seq_id === 2) {
        systray.kill()
    }
})

//==============[GOOD]=============
