Ext.define('ThemeTeamApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Vu Quang Son', email: "sonvq@qsoftvietnam.com", phone: "555-111-1111" },
        { name: 'Tran Cao Cuong',     email: "cuongtc@qsoftvietnam.com",  phone: "555-222-2222" },
        { name: 'Tran Quoc Hung',   email: "hungtq@qsoftvietnam.com",    phone: "555-333-3333" },
        { name: 'Vu Van Quyet',     email: "quyetvv@qsoftvietnam.com",        phone: "555-444-4444" },
        { name: 'Vu Xuan Thang',     email: "thangvx@qsoftvietnam.com",        phone: "555-555-5555" },
        { name: 'Nguyen Xuan Bach',     email: "bachnx@qsoftvietnam.com",        phone: "555-666-6666" },
        { name: 'Cao Tung',     email: "caot@qsoftvietnam.com",        phone: "555-777-7777" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});