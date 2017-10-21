//Challenge 49 (Overriding Prototypal Methods 1)

Fencepost.prototype.valueOf = function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
};
