Template.post.onCreated(function() {
  var self = this;
  self.setState("loaded", false);
  self.autorun(function() {
    var slug = self.props.slug();
    if(!slug) return;

    self.subscribe('post', slug, {
      onReady: function() {
        self.setState('loaded', true);
        self.setState('post', Posts.findOne({slug: slug}));
      },
      onStop: function() {
        self.setState('loaded', true);
      }
    });
  });
});