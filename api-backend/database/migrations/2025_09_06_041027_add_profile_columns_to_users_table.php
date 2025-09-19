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
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'age')) {
                $table->integer('age')->nullable();
            }
            if (!Schema::hasColumn('users', 'gender')) {
                $table->enum('gender', ['male', 'female', 'other'])->nullable();
            }
            if (!Schema::hasColumn('users', 'height_feet')) {
                $table->integer('height_feet')->nullable();
            }
            if (!Schema::hasColumn('users', 'height_inches')) {
                $table->integer('height_inches')->nullable();
            }
            if (!Schema::hasColumn('users', 'weight')) {
                $table->integer('weight')->nullable();
            }
            if (!Schema::hasColumn('users', 'goal')) {
                $table->enum('goal', ['weight_loss', 'weight_gain', 'maintain'])->nullable();
            }
            if (!Schema::hasColumn('users', 'target_weight')) {
                $table->integer('target_weight')->nullable();
            }
            if (!Schema::hasColumn('users', 'activity_level')) {
                $table->enum('activity_level', ['low', 'moderate', 'high'])->nullable();
            }
            if (!Schema::hasColumn('users', 'profile_completed')) {
                $table->boolean('profile_completed')->default(false);
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $columns = [
                'age', 'gender', 'height_feet', 'height_inches', 
                'weight', 'goal', 'target_weight', 'activity_level', 'profile_completed'
            ];

            foreach ($columns as $column) {
                if (Schema::hasColumn('users', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
