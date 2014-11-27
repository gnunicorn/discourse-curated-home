export default {
  name: "customize-curated-home",

  initialize: function(container, application) {
    Discourse.DiscoveryCuratedRoute.reopen({
      actions: {
        expandForUsername: function(username) {
          username = username.replace(/^@/, '');
          if (!Em.isEmpty(username)) {
            this.controllerFor('poster-expansion').show(username);
          }
        },
      },
      renderTemplate: function() {
        //this.render('navigation/default', { outlet: 'navigation-bar' });
        this.render('curated_home', { controller: 'discovery/topics', outlet: 'list-container' });
      }
    });

    var topicModel = container.lookupFactory("model:topic") || Discourse.Topic,
        topicCtrl = container.lookupFactory("controller:topic");

    topicModel.reopen({
      setCustomField: function(property, value){
        this.set(property, value)
        return Discourse.ajax(this.get('url') + "/custom_field", {
          type: 'PUT',
          data: {field: property, value: value }
        });
      },
    });

    topicCtrl.reopen({
      actions:{
        toggleCustomField: function(property){
          var model = this.get('content');
          model.setCustomField(property, !model.get(property));
        }
      }
    });
  }
};
