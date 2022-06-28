attributes :id, :title, :score
child :user do
	extends "users/user"
end
