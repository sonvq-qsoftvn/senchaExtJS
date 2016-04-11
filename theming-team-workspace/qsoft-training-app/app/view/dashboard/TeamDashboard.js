/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.dashboard.TeamDashboard', {
    extend: 'Ext.Panel',
    xtype: 'teamdashboard',
    title: 'Team Overview',
    requires: [
        'QsoftTrainingApp.store.TeamStatics',
        'Ext.chart.PolarChart', 
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.interactions.ItemHighlight'
    ],

    bodyPadding: 10,    
   
    layout: 'fit',
    items: [{
        xtype: 'polar',
        width: 500,
        height: 500,
        id: 'teamdashboardchart',
        store: {
            type: 'TeamStatics'
        },
        interactions: ['rotate', 'itemhighlight'],
        sprites: [{
            type: 'text',
            text: 'Team Member',
            font: '22px Helvetica',
            width: 100,
            height: 30,
            x: 40, 
            y: 40 
        }],
        legend: {
            docked: 'bottom'
        },
        insetPadding: 50,
        innerPadding: 20,
        
        series: [{
            type: 'pie',
            xField: 'memberCount',
            style: {
                colors: ["red", "black", "green", "blue"]
            },
            colors: ['#9ACD32', '#FFFF00', '#EE82EE', '#40E0D0', '#00FF7F', '#FF8C00', '#FF1493', '#ADFF2F', '#F08080', '#FFA07A', '#F0E68C', '#CD5C5C', '#00BFFF'],
            label: {
                field: 'name',
                font: '18px Helvetica',
                // color: 'black',
                display: 'outside',
                calloutLine: {
                    length: 60,
                    width: 3
                } 
            },
            
            highlight: true,
            tooltip:{ 
                trackMouse:true, 
                scope: this, 
                renderer:function(toolTip, storeItem, item){
                    toolTip.setHtml('<span style="color:#fff;font-size:24px;">' + storeItem.get('name') + ' has ' + storeItem.get('memberCount') + ' members </span>');
                }
            },
            renderer: function(sprite, record, attr, index, store) {
                return Ext.apply(attr, {
                    fill: ['#9ACD32', '#FFFF00', '#EE82EE', '#40E0D0', '#00FF7F', '#FF8C00', '#FF1493', '#ADFF2F', '#F08080', '#FFA07A', '#F0E68C', '#CD5C5C', '#00BFFF'][index%13],
                    stroke: ['#9ACD32', '#FFFF00', '#EE82EE', '#40E0D0', '#00FF7F', '#FF8C00', '#FF1493', '#ADFF2F', '#F08080', '#FFA07A', '#F0E68C', '#CD5C5C', '#00BFFF'][index%13]
                });
            }
        }]
    }]
});
