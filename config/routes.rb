Rails.application.routes.draw do
    put "t/:slug/:topic_id/custom_field" => "topics#custom_field", constraints: {topic_id: /\d+/}
    puts "AFTER"
end