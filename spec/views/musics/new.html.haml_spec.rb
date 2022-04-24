require 'rails_helper'

RSpec.describe "musics/new", type: :view do
  before(:each) do
    assign(:music, Music.new(
      user: nil,
      band: nil,
      title: "MyString",
      bookmarks_count: 1,
      score: "MyString"
    ))
  end

  it "renders new music form" do
    render

    assert_select "form[action=?][method=?]", musics_path, "post" do

      assert_select "input[name=?]", "music[user_id]"

      assert_select "input[name=?]", "music[band_id]"

      assert_select "input[name=?]", "music[title]"

      assert_select "input[name=?]", "music[bookmarks_count]"

      assert_select "input[name=?]", "music[score]"
    end
  end
end
