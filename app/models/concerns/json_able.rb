module JsonAble
  extend ActiveSupport::Concern

  included do
    def as_json(attrs=nil)
      Hash[(attrs || self.class::DEFAULT_ATTRS).map {|attr| [attr, self.send(attr)]}]
    end
  end
end



