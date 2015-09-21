FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render('layout', { main: 'home' });
  }
});

FlowRouter.route('/post/:slug', {
  action: function(params) {
    BlazeLayout.render('layout', { main: 'post', slug: params.slug });
  }
});