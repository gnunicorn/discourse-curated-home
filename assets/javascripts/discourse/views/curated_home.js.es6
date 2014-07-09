export default Discourse.View.extend({
    categories: [],
    templateName: function(){
        return Discourse.SiteSettings.curated_home_design || "curated_home_blog";
    }.property(),

    didInsertElement: function(){
        Discourse.CategoryList.list('categories'
            ).then(function(resp){
                this.set("categories", resp.categories);
            }.bind(this));
    },

    importantCategories: function(){
        return this.get("categories");
    }.property("categories")
})