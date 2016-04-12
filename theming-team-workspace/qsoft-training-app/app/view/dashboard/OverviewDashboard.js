/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.dashboard.OverviewDashboard', {
    extend: 'Ext.Panel',
    xtype: 'overviewdashboard',
    title: 'Application Overview',
    requires: [
        'QsoftTrainingApp.store.AppStatics',
        
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
        insetPadding: 60,
        innerPadding: 20,
        id: 'overivewdashboardchart',
        flipXY: true,
        store: {
            type: 'AppStatics'
        },  

        //set legend configuration
        legend: {
            docked: 'bottom'
        },

        sprites: [{
            type: 'text',
            text: 'User, Team, Topic overview Chart',
            font: '22px Helvetica',
            width: 100,
            height: 30,
            x: 40, 
            y: 40 
        }],

        //define the x and y-axis configuration.
        axes: [{
            type: 'numeric',
            position: 'bottom',
            grid: true,
            minimum: 0,
            fields: ['count'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0'),
                rotate: {
                    degrees: -45
                },
                fontSize: '20px'
            },
            title: 'Total count'
        }, {
            type: 'category',
            grid: true,
            position: 'left',
            label: {
                // color: 'red',
                // font: 'bold italic 14px Helvetica'
                fontSize: '20px',
                fontStyle: 'italic'
            },
        }],

        //define the actual bar series.
        series: [{
            type: 'bar',
            xField: 'name',
            yField: ['count'],
            axis: 'bottom',  
            highlight: true,
            label: {
                display: 'insideEnd',
                field: 'count',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'horizontal',
                color: '#333',
                font: 'bold 28px Helvetica',
                'text-anchor': 'middle'
            },
            style: {
                opacity: 0.80
            }, 
            highlight: {
                fill: '#000',
                'stroke-width': 20,
                stroke: '#fff'
            },  
            renderer: function(sprite, record, attr, index, store){
               return Ext.apply(attr, {
                  fill: '#79AC38'
                  // width: 50,
               });
            },
            tooltip:{ 
                trackMouse:true, 
                scope: this,                
                renderer:function(toolTip, storeItem, item){
                    var plural = '';
                    if (storeItem.get('count') > 1) {
                        plural = 's';
                    }
                    toolTip.setHtml('<span style="color:#fff;font-size:24px;">There are ' + storeItem.get('count') + ' ' + storeItem.get('name') + plural + ' in total</span>');
                }
            },    
            title:['Total Count on each Item']
        }]
    }]
});
