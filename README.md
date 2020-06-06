# Esoterico quotidiano

## Requirements
 * [git](https://git-scm.com/) - [Install git for mac](https://git-scm.com/download/mac)
 * [Jekyll](https://jekyllrb.com/) 

## Run in local
To run the theme locally, navigate to the theme directory and run `bundle install` to install the dependencies, then run `jekyll serve` or `bundle exec jekyll serve` to start the Jekyll server.

## How to publish a new post or page

### 1 - Branch form master

**Gitbub**
1. Open to [https://github.com/stanislasbonifetto/esotericoquotidiano](https://github.com/stanislasbonifetto/
esotericoquotidiano)
1. [Create a new branch](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)

**local**
```
git checkout master
git pull origin
git checkout -b my_branch_post
```

### 2 - Create new post or page

#### Post
Create a md file in folder `_posts` with this syntax `YYYY-MM-dd-my-post.md`.

The file have to start with:
```
---
layout: post
title:  My post
date:   2020-02-07 15:01:35 +0300
image:  'https://via.placeholder.com/1500x2000'
tags:   my_tag_1 my_tag_2
---
```

Then you write your post following the [styleguide](https://www.esotericoquotidiano.it/styleguide/)

#### Page
Create a md file in folder `_page` with this syntax `my-page.md`.

The file have to start with:
```
---
layout: page
title: My page
permalink: /my-page/
image: 'https://via.placeholder.com/1500x2000'
---
```

Then you write your post following the [styleguide](https://www.esotericoquotidiano.it/styleguide/)

**Gitbub**
How to create a file in github [https://help.github.com/en/github/managing-files-in-a-repository/creating-new-files](https://help.github.com/en/github/managing-files-in-a-repository/creating-new-files)

### 3 - Run in local
After your changes you could preview running in local.
1. Boostrap your server
```
bundle exec jekyll serve
```
1. Navigate [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

### 4 - Push your change
This step is only if you have create your branch in your local machine.
1. Looks which files are change
```
git status
```
You should see only the files you have change or add.
1. Add files
```
git add .
```
1. Commit files
```
git commit -m "my message describe the changes"
```
1. Push
```
git push origin
```
If is the first push on this branch you have to do
```
git push --set-upstream origin my_branch_post
```

### 5 - Create a PR
When you have push all the changes in your branch and push on Github and you are ready to publish your page, you are ready to create your PR to `master`.

[https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

### 6 - Ask to someone to review your PR
Now that your PR is read, ask to someone to review it.

# Original Template
The website use the Caitlin template. You could find [here](_original_template) the original template.

Caitlin is an elegant and simple premium theme for Jekyll. If you're looking for a simple, fast and unique theme for your beautiful personal blog, check out Caitlin Theme.