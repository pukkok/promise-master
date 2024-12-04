class A {
  constructor(executor) {
    this.state = "okey"; 
    this.value = null; 
    this.reason = null;
    this.yesCallbacks = []; 
    this.noCallbacks = []; 

    const resolve = (value) => {
      if (this.state === "okey") {
        this.state = "yes"; 
        this.value = value;
        this.yesCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "okey") {
        this.state = "no"; 
        this.reason = reason;
        this.noCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  B(D) {
    return new A((resolve, reject) => {
      if (this.state === "yes") {
        try {
          const result = D(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else if (this.state === "okey") {
        this.yesCallbacks.push((value) => {
          try {
            const result = D(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }

  C(E) {
    return new A((resolve, reject) => {
      if (this.state === "no") {
        try {
          const result = E(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else if (this.state === "okey") {
        this.noCallbacks.push((reason) => {
          try {
            const result = E(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });
  }
}