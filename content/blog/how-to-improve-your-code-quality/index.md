---
title: How to improve the quality of your code
date: "2022-02-04"
description: "It's incredibly important to maintain a high level of code quality when working in a team, but even more so when working solo to ensure you can quickly understand your own code and avoid catching yourself say \"wtf was I thinking\" 🤦"
featured: images/improving-your-code-quality.jpg
categories: ['development']
tags: ['tips & tricks', 'dev']
---

If you were a developer 10 years ago, chances are you weren’t coding for developers but instead coding for computers. Times have changed; now more than ever, it’s important to be coding for other developers.

The raw truth is - compilers and computers can understand code no matter how it is written, so long as it is syntactically correct.

Collaboration, code quality and readability is vital when you’re working on open source projects - where hundreds, if not thousands of other developers will need to read your code to understand what it’s trying to achieve. 

I’ve decided to compile a few tips on how you can improve your code quality, so that you can produce clean, readable code for developers!

## Code standard

Implementing a code standard should be the first step toward improving your code quality.

This sets the foundation for all developers collaborating on the same code base, defining the rules surrounding the code they are writing.

There are many code standards for each programming language, however only 1 or 2 are widely used. 

Here are a few examples:

### PHP

These 4 PSR versions all make up the most common coding standard for PHP:

[PSR-1](https://www.php-fig.org/psr/psr-1/), [PSR-2](https://www.php-fig.org/psr/psr-2/), [PSR-4](https://www.php-fig.org/psr/psr-4/) and [PSR-12](https://www.php-fig.org/psr/psr-12/)

### JavaScript

[Airbnb's code quality standards](https://github.com/airbnb/javascript) are basically the industry standard for JavaScript. 

### Ruby && ROR (Ruby on rails)

Ruby on Rails: https://guides.rubyonrails.org/contributing_to_ruby_on_rails.html

Rubocop: https://github.com/rubocop/ruby-style-guide

### Rust

Rust’s official coding standards: https://doc.rust-lang.org/1.0.0/style/

## DRY - Don’t repeat yourself

One of the easiest ways to fall short of writing quality code is by using the old faithful: `Ctrl + C` & `Ctrl + V`. 

If there’s one thing you take away from this blog post, please let it be this…. focus on writing modular code.

Whenever you think a section of code may be used elsewhere, it’s always a good idea to refactor it into a class or function that can easily be called from anywhere in your application.

This means that should this code have any bugs, or need updating to support later versions of your language: it’s very easy to do so.

## Don’t reinvent the wheel

Why spend 6 hours coding a better version of a popup calendar in javascript, when loads of them already exist and are extremely customizable?

Trust me - I’ve been there. There’s a certain euphoria when you can create such an incredibly elegant element or piece of code that just WORKS, and better yet, you can chop and change it whenever you like. You also aren’t limited to it being maintained, updated, and supported in future versions of the framework you’re using, or language you’re coding in.

But trust me when I say this - your time is more valuable than this. You don’t want to be maintaining a complex piece of code. Hand it off to another developer or scale up to use an amazing phenomenon known as ‘open source’ - where hundreds of developers can maintain the same database.  

## Comments

This may be a bit of a no-brainer, but hang with me here for a second. I’m not the kind of developer that comments on every pull request “add more comments!” but I certainly will if someone’s code looks overly complex and can be understood to do many different things. In these cases - comments are absolutely vital. 

I do, however, find the visual difference to be pleasing. The rough nature of syntax, versus the calm nature of light grey comments - I feel like it completely breaks up the harshness of writing code.

But let’s be honest - if you’re working in a statically-typed language like Java, C #, TypeScript or even PHP 8.1 (if you opt to go down that route), the need for comments has never been at a lower point. Having the ability to statically define variables now defeats the purpose of writing comments that describe variables and what their job is.

In situations like this, I would argue that writing your comments like a conversation is the way it should be done. Comments should essentially walk the reader through complicated code and explain what it does, what it's expected to do, and what the expected results are.

If the reader can see this block of code, read the comments and as a result - understand what you did when writing that function, then your job here is done.

There are 2 parts to completely removing comments from statically typed language:

### Variable and function names

It’s vital to craft a story using variable names. Make it a descriptive and detailed story.

Here are some examples to guide you on your way:

```php
public function admin($user)
{
    return true;
}
```

Could be written as follows:

```php
public function isUserAnAdmin($user)
{
    return true;
}
```

When scrolling through the code it’s much easier to see what “isUserAnAdmin” is trying to achieve and what the function will return.

Likewise for variables:

```php
$userAdmin = true;
```

Versus:

```php
$userIsAdmin = true;
```

### SOLID

The second requirement when you’re removing all comments, is to code using the [SOLID](https://www.bmc.com/blogs/solid-design-principles) principle. Being that - one class has one responsibility. It will never be responsible for more than one function or object. When you can enforce this principle, then you are able to clearly see what the code is trying to achieve.

Of course, if your code is not statically typed and does not offer any alternatives, then you must continue using comments to allow IDEs and other developers to interpret the code and read it effortlessly.

## Four eyes

Another critical step toward writing quality code, is to apply the [four-eyes principle](https://ec.europa.eu/eurostat/cros/content/four-eyes-principle_en). This principle enforces the rule that two people must approve some action before it is taken; or as it would be applied in our case, two separate people must approve a pull request before it is merged.

This allows you to leverage your teammates and their knowledge to assist you in maintaining high code quality. 

This is a very important step in any kind of collaborative environment. It not only holds all of the developers accountable for writing high quality code (knowing that another developer is going to review this code), but it also keeps everyone in the know when new functions or features are being developed, which helps to alleviate the bus factor. 

Collaboration + knowledge sharing + reducing the bus factor? WIN. 🚀 

## CI (usually accompanied by CD) but in this case… just CI. Continuous integration. 

This is a great way to proactively challenge your code - which is something you want to do at all times.

It is important to constantly push the code you are writing to its ultimate limits. This pushes you to be a better developer, as it forces you to write more resistant code. 

There are a few things to consider when implementing CI though:

1. The builds must be fast. You do not want to be waiting up to an hour for the results of your last push.
2. You need to fix broken builds immediately. There is little to no point in having CI if you do not fix the issues it makes apparent.

With the rise of tools like [Github actions](https://github.com/features/actions) there is literally no better time to implement CI into all of your projects.

## Static Analysis

Static Analysis’ entire goal is to analyse your code automatically without ever running the code. Its sole job is to read your code and discover any bugs prior to executing it.

- It’s primary goals are to detect:
- Security vulnerabilities
- Performance issues
- Non-compliance with standards
- Use of legacy / deprecated functions

Static Analysis is quite often paired with my previous point - continuous integration. It can generate reports of compliance issues which can be reviewed by team members, with the overall goal to slowly improve code bases to be more compliant over time.

The benefit of implementing a tool like this early on is that you have the opportunity to steer clear of technical debt as time goes on, by reviewing the suggestions provided by the analysis.

The added benefit of this is that you can even have static analysis run in your IDE as you are writing the code - helping you avoid that horrible cycle of committing the code, having the CI throw errors, then needing to fix those errors and repeat. 

The negative (which you will sadly run into) is that static analysis can sometimes be very unforgiving, especially when you are running it in frameworks that are “magical”.

## Anything else?

So there you have it -  my tips on how to improve your code quality when working either in a team, or by yourself.

By no means are these tips the be all and end all of how to write better quality code, but even implementing a few of these will turn you into a more senior developer then you are today.

I’d love to hear feedback from you on any tips you’d add to this list? I may even add them to make this a great resource for now and future developers to visit!

Get in contact with me via [Twitter](https://twitter.com/joelwmale) or [LinkedIn](https://www.linkedin.com/in/joelwmale/) and let me know what you think.

Until next time. 🔥 
