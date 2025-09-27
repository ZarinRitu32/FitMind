<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 100);
            $table->string('email', 100)->unique();
            $table->string('password', 255);

            $table->integer('age')->nullable();
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->integer('height_feet')->nullable();
            $table->integer('height_inches')->nullable();
            $table->float('weight')->nullable();
            $table->enum('goal', ['gain', 'loss', 'maintain'])->default('maintain');
            $table->float('target_weight')->nullable();
            $table->enum('activity_level', ['regular', 'sometimes', 'never'])->default('regular');
            $table->boolean('profile_completed')->default(false);

            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
