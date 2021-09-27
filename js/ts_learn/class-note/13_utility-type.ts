interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

interface ProductDetail {
  i: number;
  name: string;
  price: number;
}

type FetchProduct = Partial<Product>;

const fetchProduct = (): Promise<Partial<Product>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 123123,
        name: "Juss",
        price: 123123,
        brand: "nike",
        stock: 213123,
      });
    }, 1000);
  });
};

const displayProductDetail = (
  shoppingItem: Pick<Product, "id" | "name" | "price">
) => {};

interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

type TestProduct = Partial<Product>;

const updateProductItem = (productItem: Partial<Product>) => {};

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// type UserProfileUpdate = Partial<UserProfile>;

// type UserProfileUpdate = {
//   [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
// };

type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

type Subset<T> = {
  [p in keyof T]?: T[p];
};
