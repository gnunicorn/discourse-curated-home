
# add our curated list
module CuratedTopicQuery
    def list_curated
        list_latest
    end
end

TopicQuery.send(:include, CuratedTopicQuery)


#finally register
Discourse.filters << "curated"