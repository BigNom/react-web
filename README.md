### This is the repository for React Web's site

### To set which version of node to be used on the host side run 

run 
node -v > .nvmrc

### One way to check to see if your site is well-configured is to examine the HTTP response headers
`curl -s -v http://your-newly-configured-hostname.com 2>&1 |grep Server`
