module ExampleAble
  include ActiveSupport::Concern, SerializerAble

  def examples
    serializer('Example', 'target_ids', self.id).where(target_class: self.class.name)
  end
end
