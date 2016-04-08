/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.topic.TopicController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.topic',

    store: 'Topics',
    
    init: function () {
        this.control({
            'topicslist > toolbar > button[action=add]': {
                click: this.showAddForm
            }
        });
    },   
    
    onTopicSelected: function(me, record, item, index) {
        if (localStorage.getItem('role') == 'admin') { 
            if (Ext.getCmp('addtopicwindow') != null) {
                Ext.getCmp('addtopicwindow').destroy();
            }
            var createTopicForm = Ext.create('QsoftTrainingApp.view.topic.TopicForm');
            createTopicForm.setTitle('Edit Topic');
            createTopicForm.setAction('edit');
            createTopicForm.setRecordIndex(record.getData());

            createTopicForm.down('form').getForm().setValues(record.getData());

            createTopicForm.show();
        }
    },
    
    doAddOrUpdateTopic: function () {          
        var topicFormValue = this.lookupReference('addtopicform').getValues();        

        var that = this;       
        
        var formAction = Ext.getCmp('addtopicwindow').getAction();
                
        if (topicFormValue.name == '') {
            Ext.Msg.show({
                title: 'Form error',
                msg: 'Topic name field is required',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        } else {
            var topicParams = new Object();
            topicParams.name = topicFormValue.name;
            topicParams.team_id = topicFormValue.team_id;            
            topicParams.token = localStorage.getItem("tokenKey");

            var ajaxUrl = '';
            var method = '';
            var textMessage = '';
            if (formAction == 'add') {
                textMessage = 'create';    
                ajaxUrl = QsoftTrainingApp.common.variable.Global.baseTopicApiURL;
                method = 'POST';
            } else if (formAction == 'edit') {
                var objectEdit = Ext.getCmp('addtopicwindow').getRecordIndex();
                ajaxUrl = QsoftTrainingApp.common.variable.Global.baseTopicApiURL + '/' + objectEdit._id;
                method = 'PUT';
                textMessage = 'update';    
            }
            Ext.Ajax.request({
                url: ajaxUrl,
                method: method,
                params: topicParams,
                success: function (response) {
                    if (response.status == '200') {
                        var messageShow = 'Successfully ' + textMessage + ' a topic named: ' + topicFormValue.name;
                        Ext.Msg.show({
                            title: 'Topic info',
                            msg: messageShow,
                            buttons: Ext.Msg.OK,
                            icon: 'smiles-icon',
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    Ext.getCmp('teamlistall').getStore().load();
                                    Ext.getCmp('teamtreelistall').getStore().load();
                                    Ext.getCmp('userlistall').getStore().load();  
                                    Ext.getCmp('topiclistall').getStore().load();
                                    Ext.getCmp('addtopicwindow').close();                                    
                                }
                            }
                        });
                    }                    
                },
                failure: function (response) {
                    var messageShow = 'Error, ' + textMessage + ' topic failed';
                    
                    if (response.status == '412') {
                        var textReturn = Ext.decode(response.responseText);
                        var validationObject = textReturn.validation;
                        var messageError = validationObject[Object.keys(validationObject)[0]];
                        Ext.Msg.show({
                            title: messageShow,
                            msg: messageError,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    } else {
                        Ext.Msg.show({
                            title: messageShow,
                            msg: Ext.decode(response.responseText),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    }
                }
            });
        }                
    },
    
    showAddForm: function () {
        if (Ext.getCmp('addtopicwindow') != null) {
            Ext.getCmp('addtopicwindow').destroy();
        }
        var createTopicForm = Ext.create('QsoftTrainingApp.view.topic.TopicForm');
        createTopicForm.setAction('add');
        createTopicForm.show();
    }
});
