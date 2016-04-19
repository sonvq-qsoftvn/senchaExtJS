/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.dashboard.ScoreDashboard', {
    extend: 'Ext.Panel',
    xtype: 'scoredashboard',
    title: 'Hall of Fame',
    requires: [
        'QsoftTrainingApp.store.ScoreStatics',
        'Ext.chart.Chart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.series.Bar'
    ],

    bodyPadding: 10,    
   
    layout: 'fit',
    items: [{
        xtype: 'chart',
        width: 500,
        height: 500,
        id: 'scoredashboardchart',
        insetPadding: 60,
        animate: true,
        shadow: false,
        store: {
            type: 'ScoreStatics'
        },
        sprites: [{
            type: 'text',
            text: 'Score analytic chart',
            font: '22px Helvetica',
            width: 100,
            height: 30,
            x: 40, 
            y: 40 
        }],

        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['percentage'],
            renderer: function(axis, label) { return label + '%'; },
            grid: true,
            minimum: 0            
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['name'],
            grid: true,
            // label: {
            //     rotate: {
            //         degrees: -45
            //     }
            // },
            title: 'Score Range'
        }],
        series: [{
            type: 'bar',
            axis: 'left',
            xField: 'name',
            yField: 'percentage',
            style: {
                opacity: 0.80
            },
            highlight: {
                fill: '#000',
                'stroke-width': 20,
                stroke: '#fff'
            },
            label: {
                display: 'insideEnd',
                field: 'count',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'horizontal',
                color: '#333',
                font: 'bold 28px Helvetica',
                'text-anchor': 'middle'
            },
            tooltip:{ 
                trackMouse:true, 
                scope: this, 
                renderer:function(toolTip, storeItem, item){
                    toolTip.setHtml('<span style="color:#fff;font-size:20px;line-height:24px;">There are ' + storeItem.get('count') +  ' members score between ' + storeItem.get('name') + ', accounting for ' + storeItem.get('percentage') + '% in total </span>');
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
