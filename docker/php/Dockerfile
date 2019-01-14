FROM php:7.2-fpm-stretch
ARG TIMEZONE

RUN apt-get update && apt-get install -y \
    openssl \
    git \
    unzip \
    make \
    curl \
    bash \
    iputils-ping \
    libxml2-dev \
    libxslt1-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    #&& docker-php-ext-configure curl --with-curl=/usr/local \
    && docker-php-ext-install -j$(nproc) iconv pdo_mysql xml xsl intl opcache ctype zip  \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd

# Install Composer
RUN curl --insecure https://getcomposer.org/composer.phar -o /usr/bin/composer && chmod +x /usr/bin/composer

# Set timezone
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone \
    && printf '[PHP]\ndate.timezone = "%s"\n', ${TIMEZONE} > /usr/local/etc/php/conf.d/tzone.ini \
    && "date"

ADD symfony.ini /usr/local/etc/php/conf.d/

# Type docker-php-ext-install to see available extensions
#RUN docker-php-ext-install pdo pdo_mysql

RUN echo 'alias sf="php bin/console"' >> ~/.bashrc \
    && echo 'alias ll="ls -la"' >> /etc/bash.bashrc \
    && echo 'alias ..="cd .."' >> /etc/bash.bashrc

WORKDIR /var/www/symfony
EXPOSE 9000