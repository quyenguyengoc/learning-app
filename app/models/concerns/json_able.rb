module JsonAble
  extend ActiveSupport::Concern

  included do
    def as_json(attrs=nil)
      attrs = self.class::DEFAULT_ATTRS unless attrs
      Hash[
        attrs.map do |attr|
          self.class.reflect_on_association(attr) ? [attr, self.send(attr).as_json] : [attr, self.send(attr)]
        end
      ]
    end
  end
end



