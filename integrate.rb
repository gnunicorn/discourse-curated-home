
# add our curated list
module CuratedTopicQuery
    def list_curated
        list_latest
    end
end

module AddTopicCreator
    def self.included(base)
        base.attributes :created_by
    end
    def created_by
        BasicUserSerializer.new(object.user, scope: scope, root: false)
    end
end

TopicListItemSerializer.send(:include, AddTopicCreator)
TopicQuery.send(:include, CuratedTopicQuery)


#finally register
Discourse.filters << "curated"