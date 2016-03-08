/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ThemeTeamApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'ThemeTeamApp.view.main.MainController',
        'ThemeTeamApp.view.main.MainModel',
        'ThemeTeamApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
//        bodyStyle: 'background:#B7B2B2;',
        bodyStyle: 'background:#fff;',
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
    {
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            xtype: 'mainlist'
        }]
    },
    {
        title: 'Basic Panel',
        iconCls: 'fa fa-list-alt',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: { style: 'padding: 10px;' }
        },
        items: [{
            xtype: 'panel',
            height: 150,
            width: 320,
            bodyPadding: 10,
            html: 'Lorem ipsum dolor sit amet, eu vidit reque mundi cum, facer tincidunt appellantur duo ad'
        },
        {
            xtype: 'panel',
            height: 150,
            width: 320,
            title: 'Regular Panel',
            bodyPadding: 10,
            html: 'Sale definitiones ad per. Maiorum adversarium eu nam, officiis inimicus ex ius',
            tools: [
                {
                    xtype: 'tool'
                }
            ]
        },        
        {
            xtype: 'panel',
            height: 150,
            width: 320,        
            title: 'Icon Panel',
            bodyPadding: 10,
            html: 'An ius justo vitae antiopam, no duo veritus accusam, mei aeque corpora at',
            tools: [
                { type:'pin' },
                { type:'refresh' },
                { type:'search' },
                { type:'save' }
            ] 
        },
        {
            xtype: 'panel',
            height: 150,
            width: 320,
            bodyPadding: 10,
            html: 'Est ex vidit possim vituperata, his propriae perpetua convenire id',
            collapsed: false,
            collapsible: true,
            title: 'Collapsed Panel'
        },
        {
            xtype: 'panel',
            height: 150,
            width: 320,
            frame: true,
            bodyPadding: 10,
            html: 'Et elit vidisse necessitatibus qui, an vis tollit hendrerit'
        },
        {
            xtype: 'panel',
            height: 150,
            width: 320,
            frame: true,            
            title: 'Framed Panel',
            bodyPadding: 10,
            html: 'Albucius hendrerit vel eu, nominavi gubergren at sed',
            tools: [
                {
                    xtype: 'tool'
                }
            ]
        },
        {
            xtype: 'panel',
            height: 150,
            width: 320,         
            title: 'Framed Icon Panel',
            bodyPadding: 10,
            frame: true,
            html: 'Mel vide pericula ne, atqui vidisse adversarium sit ea',
            tools: [
                { type:'pin' },
                { type:'refresh' },
                { type:'search' },
                { type:'save' }
            ]
        },
        {
            xtype: 'panel',
            height: 150,
            width: 320,
            bodyPadding: 10,
            html: 'His cu inani incorrupte, utinam volutpat constituam ne his, ex eum legere',
            collapsed: false,
            collapsible: true,
            frame: true,
            title: 'Framed Collapsed Panel'
        }]
    }, {
        title: 'Tab, Tree, Grid Panel',
        iconCls: 'fa-columns',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: { style: 'padding: 10px;' }
        },
        items:[{
            xtype: 'tabpanel',
            height: 200,
            width: 320,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1',
                    bodyPadding: 10,
                    html: 'This is a normal tab panel'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2',
                    bodyPadding: 10,
                    html: 'An ius justo vitae antiopam, no duo veritus accusam, mei aeque corpora at'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    bodyPadding: 10,
                    html: 'Eos eu oblique ponderum, esse recteque vulputate usu ea'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 4',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            height: 200,
            width: 320,
//            ui: 'alternative',
            activeTab: 0,
            plain: true,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1',
                    bodyPadding: 10,
                    html: 'This is a plain tab panel'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2',
                    bodyPadding: 10,
                    html: 'An ius justo vitae antiopam, no duo veritus accusam, mei aeque corpora at'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    bodyPadding: 10,
                    html: 'Eos eu oblique ponderum, esse recteque vulputate usu ea'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 4',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            frame: true,
            height: 200,
            width: 320,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Tab 1',
                    bodyPadding: 10,
                    html: 'This is a frame tab panel'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 2',
                    bodyPadding: 10,
                    html: 'An ius justo vitae antiopam, no duo veritus accusam, mei aeque corpora at'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 3',
                    bodyPadding: 10,
                    html: 'Eos eu oblique ponderum, esse recteque vulputate usu ea'
                },
                {
                    xtype: 'panel',
                    title: 'Tab 4',
                    tabConfig: {
                        xtype: 'tab',
                        disabled: true
                    }
                }
            ]
        },
        {
            xtype: 'treepanel',
            height: 200,
            width: 320,
            title: 'Tree Panel',
            store: Ext.create('Ext.data.TreeStore', {
                fields: [
                    {
                        type: 'string',
                        name: 'id'
                    },
                    {
                        type: 'string',
                        name: 'text'
                    }
                ],
                root: {
                    expanded: true,
                    children: [
                        {
                            text: 'Trees',
                            leaf: false,
                            expanded: true,
                            children: [
                                {
                                    text: 'Banana',
                                    leaf: true
                                },
                                {
                                    text: 'Apple',
                                    leaf: true
                                }
                            ]
                        }
                    ]
                }
            })
        },
        {
            xtype: 'gridpanel',
            height: 280,
            width: 660,
            colspan: 2,
            title: 'Grid Panel',
            bbar: [{
                xtype: 'pagingtoolbar',
                store: Ext.create('Ext.data.Store', {
                    fields: [{ type: 'string', name: 'name'}, 
                        { type: 'string', name: 'gender'}, 
                        { name: 'age', type: 'int'}
                    ],
                    data: [
                        {
                            name: 'Vu Quang Son',
                            gender: 'male',
                            age: 36
                        },
                        {
                            name: 'Tran Cao Cuong',
                            gender: 'female',
                            age: 29
                        },
                        {
                            name: 'Tran Quoc Hung',
                            gender: 'male',
                            age: 74
                        },
                        {
                            name: 'Vu Van Quyet',
                            gender: 'male',
                            age: 36
                        },
                        {
                            name: 'Vu Xuan Thang',
                            gender: 'female',
                            age: 29
                        },
                        {
                            name: 'Nguyen Xuan Bach',
                            gender: 'male',
                            age: 74
                        },
                        {
                            name: 'Cao Tung',
                            gender: 'male',
                            age: 24
                        }
                    ]
                }),
                displayInfo: true,
                displayMsg : 'Displaying topics {0} - {1} of {2}'
            }],
            store: Ext.create('Ext.data.Store', {
                fields: [{ type: 'string', name: 'name'}, 
                    { type: 'string', name: 'gender'}, 
                    { name: 'age', type: 'int'}
                ],
                data: [
                    {
                        name: 'Vu Quang Son',
                        gender: 'male',
                        age: 36
                    },
                    {
                        name: 'Tran Cao Cuong',
                        gender: 'female',
                        age: 29
                    },
                    {
                        name: 'Tran Quoc Hung',
                        gender: 'male',
                        age: 74
                    },
                    {
                        name: 'Vu Van Quyet',
                        gender: 'male',
                        age: 36
                    },
                    {
                        name: 'Vu Xuan Thang',
                        gender: 'female',
                        age: 29
                    },
                    {
                        name: 'Nguyen Xuan Bach',
                        gender: 'male',
                        age: 74
                    },
                    {
                        name: 'Cao Tung',
                        gender: 'male',
                        age: 24
                    }
                ]
            }),
            selType : 'checkboxmodel',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'gender',
                    text: 'Gender'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'age',
                    text: 'Age'
                }
            ]
        }]
    }, {
        title: 'Button',
        iconCls: 'fa fa-youtube-play',
        layout: {
            type: 'table',
            columns: 4,
            tdAttrs: { style: 'padding: 10px;' }
        },
        items: [
            {
                xtype: 'button',
                text: 'Small Button'
            },
            {
                xtype: 'button',
                disabled: true,
                text: 'Disabled Button'
            },
            {
                xtype: 'button',
                scale: 'medium',
                text: 'Medium Button'
            },
            {
                xtype: 'button',
                scale: 'large',
                text: 'Large Button'
            }
        ]
    }]
});
