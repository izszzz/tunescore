require 'rails_helper'

RSpec.describe "bands/edit", type: :view do
  before(:each) do
    @band = assign(:band, Band.create!(
      name: "MyString",
      bookmarks_count: 1
    ))
  end

  it "renders the edit band form" do
    render

    assert_select "form[action=?][method=?]", band_path(@band), "post" do

      assert_select "input[name=?]", "band[name]"

      assert_select "input[name=?]", "band[bookmarks_count]"
    end
  end
end
