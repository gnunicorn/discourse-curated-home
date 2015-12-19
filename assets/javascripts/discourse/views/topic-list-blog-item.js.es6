export default Discourse.View.extend({
  templateName:"topic-list-blog-item",
  classNames: ["blogpost"],
  attributeBindings: ['data-topic-id'],
  'data-topic-id': Em.computed.alias('content.id'),
});
