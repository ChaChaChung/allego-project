const checkboxGroup = {
    AllChecked: {
        style: {
        }
    },
    childSort: 'close',
    parent: {
        style: {
            fontSize: '16px'
        }
    },
    numberRound: 2,
    lang: '',
    AllNotCheckedBtn: false,
    theme: ''
}

const form = {
    formInput: {
        titleInline: true,
        style: {
            search_input: {},
            form_group: {},
            label: {},
            input: {}
        }
    },
    formSelect: {
        titleInline: true,
        style: {
            select_box: {},
            select_area: {},
            search_input: {}
        }
    },
    formCheckbox: {
        style: {
            label: {},
            input: {}
        }
    }
}

const table = {
    tableLang: {
    },
    tableClassName: 'table-flush table',
    theadClassName: 'thead-light'
}

const vteamConfig = {
    lang: 'en', // 語言
    numberRound: 2, // 小數點
    form, // form config
    table, // table config
    checkboxGroup // check config
}

export default vteamConfig
