import {
  AlertTriangle,
  BarChart2,
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import StateCard from "../components/common/StateCard";
import Header from "./../components/common/Header";
import { motion } from "framer-motion";
import ProductTable from "../components/products/ProductTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl max-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366F1"
          />
          <StateCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <StateCard
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <StateCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          />
        </motion.div>

        <ProductTable />

        {/* CHARTS */}
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
