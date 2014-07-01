export default Discourse.View.extend({
    templateName: function(){
        return Discourse.SiteSetting.curated_home_template || "curated_home_blog";
    }.property()
})