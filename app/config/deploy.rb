set :serverName,  "sg111.servergrove.com"
set :repository,  "git@github.com:urvangreen/urvangreen-web.git"

set :domain,      "urvangreen.com"
set :deploy_to,   "/var/www/vhosts/urvangreen.com/symfony_projects/" # Remote location where the project will be stored

#Configuring ssh port
ssh_options[:port] = "22123"
#Using the ssh key from local computer instead the key in the server to get git repositories
#ssh_options[:forward_agent] = true

set :scm,         :git
set :deploy_via,  :rsync_with_remote_cache
set :user,        "urvangreen"

# Roles
role :web,        domain
role :app,        domain
role :db,         domain, :primary => true

set  :keep_releases,  3 # The number of releases which will remain on the server
set  :use_sudo,       false

# Update vendors during the deploy
set :update_vendors, true

# Set some paths to be shared between versions
set :shared_files,    ["app/config/parameters.ini"]
set :shared_children, [app_path + "/logs", web_path + "/uploads", "vendor"]
