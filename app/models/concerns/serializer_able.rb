module SerializerAble
  include ActiveSupport::Concern

  def serializer(resource, target_col, value)
    resource.constantize.where(':col LIKE :search', { col: target_col, search: "%#{[id].to_yaml}%" })
  end
end
