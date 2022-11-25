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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('hashid')->nullable();
            $table->string('name');
            $table->string('slug');
            $table->tinyInteger('type');
            $table->string('cover')->nullable();
            $table->double('price',8,2);
            $table->boolean('status')->default(0);
            $table->json('options')->nullable();
            $table->unsignedBigInteger('market_id');
            $table->foreign('market_id')->references('id')->on('markets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
