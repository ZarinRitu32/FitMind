<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->integer('age')->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->integer('height_feet')->nullable();
            $table->integer('height_inches')->nullable();
            $table->float('weight')->nullable();
            $table->enum('goal', ['weight_loss', 'maintain', 'muscle_gain'])->default('maintain');
            $table->float('target_weight')->nullable();
            $table->enum('activity_level', ['low', 'moderate', 'regular'])->default('moderate');
            $table->boolean('profile_completed')->default(false);
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'age', 'gender', 'height_feet', 'height_inches',
                'weight', 'goal', 'target_weight', 'activity_level',
                'profile_completed'
            ]);
        });
    }
};