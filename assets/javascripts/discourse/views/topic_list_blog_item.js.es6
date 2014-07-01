
export default Discourse.View.extend({
  templateName:"topic_list_blog_item",
  classNames: ["blogpost"],
  attributeBindings: ['data-topic-id'],
  'data-topic-id': Em.computed.alias('content.id'),
});