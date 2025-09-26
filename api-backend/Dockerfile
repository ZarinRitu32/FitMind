# PHP 8.1 FPM base
FROM php:8.1-fpm

WORKDIR /var/www

# Install system dependencies & PHP extensions
RUN apt-get update && apt-get install -y \
    git curl libpng-dev libonig-dev libxml2-dev zip unzip \
    libpq-dev \
    && docker-php-ext-install pdo_pgsql mbstring exif pcntl bcmath gd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer (from official Composer image)
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# Ensure Laravel dirs exist with proper permissions
RUN mkdir -p /var/www/storage/framework/cache \
    /var/www/storage/framework/sessions \
    /var/www/storage/framework/views \
    /var/www/storage/logs \
    /var/www/bootstrap/cache \
    && chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 755 /var/www/storage /var/www/bootstrap/cache

# Copy composer files first for better caching
COPY composer.json composer.lock ./

# Install PHP dependencies (production only)
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Copy application files
COPY . .

# Fix permissions after copying
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 755 /var/www/storage /var/www/bootstrap/cache

# Run composer scripts
RUN composer run-script post-autoload-dump

# Expose Laravel port
EXPOSE 8000

# Start Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]