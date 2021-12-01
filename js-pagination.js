export class Pagination extends EventTarget {
    constructor(options) {
        super();
        this.count_per_page = options?.count_per_page !== undefined ? options?.count_per_page : 0;
        //this.reset_on_update = options?.reset_on_update !== undefined ? options?.reset_on_update : false;
        this.total = 0;
        this.current_page = 1;
        this.total_pages = 0;
    }

    // update
    update(total) {
        if (total === this.total) {
            return this
        }
        this.total = total;
        if (total === 0) {
            this.total_pages = 0;
        } else if (total < this.count_per_page) {
            this.total_pages = 1;
        } else {
            this.total_pages = Math.ceil(total / this.count_per_page);
        }
        this.dispatchEvent(new Event('change'));
        return this
    }

    // next
    next() {
        if (this.current_page + 1 > this.total_pages) {
            return this
        }
        this.current_page++;
        this.dispatchEvent(new Event('next'));
        this.dispatchEvent(new Event('change'));
        return this
    }

    // previous
    previous() {
        if (this.current_page - 1 === 0) {
           return this
        }
        this.current_page--;
        this.dispatchEvent(new Event('previous'));
        this.dispatchEvent(new Event('change'));
        return this
    }

    // goto
    goto(page) {
        if (page > this.total_pages || page < this.total_pages) {
           return this
        }
        this.current_page = page;
        this.dispatchEvent(new Event('goto'));
        this.dispatchEvent(new Event('change'));
        return this
    }


}