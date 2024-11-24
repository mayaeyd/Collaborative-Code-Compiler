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
        Schema::create('collaborations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->enum('role', ['editor', 'viewer'])->default('viewer');
            $table->unsignedBigInteger('collaborator_id');
            $table->unsignedBigInteger('file_id');

            $table->foreign('collaborator_id')->references('id')->on('users');
            $table->foreign('file_id')->references('id')->on('files');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('collaborations');
    }
};
