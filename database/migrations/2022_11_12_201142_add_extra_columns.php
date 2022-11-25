<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('markets', function (Blueprint $table) {
            $table->tinyInteger('progress')->default(0);
            $table->string('logo')->nullable();
            $table->text('description')->nullable();
            $table->json('products')->nullable();
            $table->json('services')->nullable();
            $table->tinyInteger('sellable')->default(0);
            $table->json('subscribers')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('markets', function (Blueprint $table) {
            //
        });
    }
};
