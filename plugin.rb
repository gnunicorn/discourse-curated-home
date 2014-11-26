# name: curated home
# about: shows a curated home in a different style
# version: 0.1
# authors: Benjamin Kampmann


register_asset "javascripts/curated_home.js"
register_asset "curated_home_style.scss"

after_initialize do
    require_dependency File.expand_path('../integrate.rb', __FILE__)
end


# Odd, but we have to register first, otherwise routes won't pick it up
Discourse.filters << "curated"