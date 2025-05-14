class Middleware {
  /**
   * @param {MiddlewareFunc} func
   */
  constructor() {
    this.middleware = [];
  }
  //the fucn can be middleware (req,next) || errorhandler (err,req,next)
  use(func) {
    this.middleware.push(func);
  }

  /**
   * @param {Request} req
   */
  start(req) {
    let index = 0;
    const next = (error) => {
      const fn = this.middleware[index++];
      if (error) {
        //function is erro handler
        if (fn.length === 3) {
          try {
            fn(error, req, next);
          } catch (error) {
            next(error);
          }
        }
        else {
          //pass it to next function
          next(error);
        }
      }
      else {
        if (fn.length == 2) {
          try {
            fn(req, next);
          } catch (error) {
            next(error);
          }
        }
        else {
          next();
        }
      }
    }
    next();
  }
}


class Middleware {
  /**
   * @param {MiddlewareFunc} func
   */
  constructor() {
    this.middleware = [];
    this.errorHandler = [];
  }
  use(func) {
    if (func.length === 2)
      this.middleware.push(func);
    else
      this.errorHandler.push(func);
  }

  /**
   * @param {Request} req
   */
  start(req) {
    const next = (error) => {
      let args = [req, next];
      let fn;
      if (error) {
        args.unshift(error);
        fn = this.errorHandler.shift();
      }
      else {
        fn = this.middleware.shift();
      }

      try {
        fn && fn(...args);
      } catch (error) {
        next(error);
      }

    }
    next();
  }
}