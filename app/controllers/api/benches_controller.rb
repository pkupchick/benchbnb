class Api::BenchesController < ApplicationController

    def index
        @benches = Bench.all
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save!
            render :show
        else
           render json: @bench.errors.full_messages, status: 401
        end
    end

    def show
        @bench = selected_bench
    end

    private

    def selected_bench
        Bench.find(params[:id])
    end

    def bench_params
        require(:bench).permit(:description, :lng, :lat)
    end
end
