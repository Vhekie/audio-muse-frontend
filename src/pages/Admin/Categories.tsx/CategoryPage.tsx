import { CategoryForm } from "@/components/CategoryForm";
import { DashboardLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useGetAllCategories } from "@/hooks/queries/useCategories";
import { useState } from "react";
// import { useCategoryStore } from "@/stores/useCategoryStore";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  // const { categories, getAllCategories } = useCategoryStore();
  // useEffect(() => {
  //   getAllCategories();
  // }, []);
  const { data: categories, isLoading } = useGetAllCategories();
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  if (!categories || isLoading) {
    return <div>loading .....</div>;
  }

  return (
    <DashboardLayout>
      <Modal
        open={showCategoryForm}
        setOpen={setShowCategoryForm}
        heading="Create Category"
        headingDescription="Create New Sound Category"
        content={
          <CategoryForm
            onFinish={() => {
              setShowCategoryForm(false);
            }}
          />
        }
        onConfirm={() => {}}
        trigger={<Button variant="outline">Create New Category</Button>}
        renderFooter={false}
      />
      {/* list categories */}
      <p>Categories</p>
      <ol>
        {categories?.map((category) => {
          return (
            <li
              className="cursor-pointer"
              key={category._id}
              onClick={() => navigate(`/admin/categories/${category._id}`)}
            >
              {category.name}
            </li>
          );
        })}
      </ol>
    </DashboardLayout>
  );
};
export default CategoryPage;
